// Hardcoded mock chatbot service

import type { PlaygroundActions } from "./PlaygroundAgentContext";

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
}

// ── Mock data ──────────────────────────────────────────────

export const MOCK_URL = "abc.com/abc";

// Track the last response status for context-aware Dynatrace logs
let lastMockResponseStatus: number | null = null;
let lastMockRequestBody: any = null;

// Track collection execution count to show 3 or 4 requests
let collectionExecutionCount = 0;

// Generate dates relative to today
function getTodayDateString(): string {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

function getFutureDateString(daysAhead: number): string {
  const future = new Date();
  future.setDate(future.getDate() + daysAhead);
  return future.toISOString().split("T")[0];
}

function getPastDateString(daysAgo: number): string {
  const past = new Date();
  past.setDate(past.getDate() - daysAgo);
  return past.toISOString().split("T")[0];
}

// Hotel reservation payload with PAST dates (will fail validation)
const MOCK_ORIGINAL_BODY = {
  reservationType: "HOTEL_BOOKING",
  guestDetails: {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "+1-555-123-4567"
  },
  hotelId: "HTL-MARRIOTT-NYC-001",
  roomType: "DELUXE_SUITE",
  checkInDate: getPastDateString(30),  // 30 days ago - will cause 400
  checkOutDate: getPastDateString(25), // 25 days ago - will cause 400
  numberOfGuests: 2,
  specialRequests: ["Late checkout", "King bed", "High floor"],
  paymentDetails: {
    cardType: "VISA",
    lastFourDigits: "4242",
    billingAddress: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA"
    }
  },
  totalAmount: 1250.00,
  currency: "USD"
};

// Hotel reservation payload with FUTURE dates (will succeed)
const MOCK_UPDATED_BODY = {
  ...MOCK_ORIGINAL_BODY,
  checkInDate: getFutureDateString(7),   // 7 days from now
  checkOutDate: getFutureDateString(12), // 12 days from now
};

const MOCK_SUCCESS_RESPONSE = {
  status: 200,
  message: "Hotel reservation created successfully",
  data: {
    confirmationNumber: "CONF-HTL-2026-789456",
    reservationId: "RES-NYC-MARRIOTT-00892",
    hotelName: "Marriott Marquis New York",
    roomType: "DELUXE_SUITE",
    checkInDate: getFutureDateString(7),
    checkOutDate: getFutureDateString(12),
    numberOfNights: 5,
    totalAmount: 1250.00,
    currency: "USD",
    guestName: "John Smith",
    status: "CONFIRMED",
    createdAt: new Date().toISOString(),
  },
};

const MOCK_ERROR_RESPONSE = {
  status: 400,
  error: "Bad Request",
  message: "Reservation dates validation failed",
  details: {
    code: "INVALID_DATES",
    reason: "Check-in and check-out dates must be current or future dates. Past dates are not allowed for new reservations.",
    checkInDate: getPastDateString(30),
    checkOutDate: getPastDateString(25),
    currentDate: getTodayDateString(),
  },
  timestamp: new Date().toISOString(),
};

// ── Helpers that check whether a URL should be intercepted ─

export function shouldInterceptUrl(url: string): boolean {
  const normalized = url.replace(/^https?:\/\//, "").replace(/\/+$/, "");
  return normalized === MOCK_URL;
}

// Returns the mock original body for populating the request
export function getMockOriginalBody(): string {
  return JSON.stringify(MOCK_ORIGINAL_BODY, null, 2);
}

// Check if dates in the body are valid (current or future)
function areDatesValid(bodyInput: string): boolean {
  try {
    const parsed = JSON.parse(bodyInput);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check checkInDate and checkOutDate for hotel reservation
    if (parsed.checkInDate) {
      const checkIn = new Date(parsed.checkInDate);
      if (checkIn < today) return false;
    }
    if (parsed.checkOutDate) {
      const checkOut = new Date(parsed.checkOutDate);
      if (checkOut < today) return false;
    }

    return true;
  } catch {
    return true; // If can't parse, let it pass
  }
}

export function getMockInterceptResponse(bodyInput?: string) {
  const datesValid = bodyInput ? areDatesValid(bodyInput) : areDatesValid(JSON.stringify(MOCK_ORIGINAL_BODY));

  if (datesValid) {
    lastMockResponseStatus = 200;
    lastMockRequestBody = bodyInput ? JSON.parse(bodyInput) : MOCK_ORIGINAL_BODY;
    return {
      body: MOCK_SUCCESS_RESPONSE,
      status: 200,
      statusText: "OK",
      headers: { "content-type": "application/json", "x-mock": "true", "x-reservation-id": "RES-NYC-MARRIOTT-00892" },
      executionTimeMs: 127,
    };
  } else {
    lastMockResponseStatus = 400;
    lastMockRequestBody = bodyInput ? JSON.parse(bodyInput) : MOCK_ORIGINAL_BODY;
    return {
      body: MOCK_ERROR_RESPONSE,
      status: 400,
      statusText: "Bad Request",
      headers: { "content-type": "application/json", "x-mock": "true", "x-error-code": "INVALID_DATES" },
      executionTimeMs: 45,
    };
  }
}

// ── Chatbot agent actions ──────────────────────────────────

function executeInPlayground(actions: PlaygroundActions): string {
  actions.setMethod("POST");
  actions.setUrl("https://abc.com/abc");
  const bodyStr = JSON.stringify(MOCK_ORIGINAL_BODY, null, 2);
  actions.setBodyInput(bodyStr);

  // Show loading state first
  setTimeout(() => {
    actions.setResponse(
      JSON.stringify({ message: "Sending request..." }, null, 2),
      null as any,
      "",
      {},
      0
    );

    // Then show the actual response after a realistic delay
    setTimeout(() => {
      const mock = getMockInterceptResponse(bodyStr);
      actions.setResponse(
        JSON.stringify(mock.body, null, 2),
        mock.status,
        mock.statusText,
        mock.headers,
        mock.executionTimeMs
      );
    }, 800);
  }, 200);

  return (
    "🚀 Done! I've set up a hotel reservation request to `abc.com/abc`.\n\n" +
    "**Note:** The request body contains **past dates** for check-in and check-out.\n" +
    "Check the **Response** section — you should see a **400 Bad Request** due to invalid dates.\n\n" +
    "💡 *Tip: Ask me to \"change the dates and retry\" to fix this!*"
  );
}

function changeDatesAndRetry(actions: PlaygroundActions): string {
  const updatedBodyStr = JSON.stringify(MOCK_UPDATED_BODY, null, 2);
  actions.setBodyInput(updatedBodyStr);

  // Show loading state first
  setTimeout(() => {
    actions.setResponse(
      JSON.stringify({ message: "Updating payload and retrying..." }, null, 2),
      null as any,
      "",
      {},
      0
    );

    // Then show the actual response after a realistic delay
    setTimeout(() => {
      const mock = getMockInterceptResponse(updatedBodyStr);
      actions.setResponse(
        JSON.stringify(mock.body, null, 2),
        mock.status,
        mock.statusText,
        mock.headers,
        mock.executionTimeMs
      );
    }, 900);
  }, 200);

  return (
    "✅ Done! I've updated the check-in and check-out dates to **future dates** and retried the request.\n\n" +
    `**Updated dates:**\n` +
    `• Check-in: ${MOCK_UPDATED_BODY.checkInDate}\n` +
    `• Check-out: ${MOCK_UPDATED_BODY.checkOutDate}\n\n` +
    "Check the **Response** section — you should now see a **200 OK** with a confirmation number! 🎉"
  );
}

// Execute all requests in a collection
function executeCollection(actions: PlaygroundActions, _collectionName?: string): string {
  collectionExecutionCount++;
  const isFirstRun = collectionExecutionCount === 1;
  const totalRequests = isFirstRun ? 3 : 4;

  // Simulate executing a collection with multiple requests with realistic delays
  setTimeout(() => {
    // First show loading state
    actions.setResponse(
      JSON.stringify({ message: "Executing collection requests..." }, null, 2),
      null as any,
      "",
      {},
      0
    );

    // Simulate first request completing
    setTimeout(() => {
      actions.setResponse(
        JSON.stringify({ message: `Executing request 1 of ${totalRequests}: Order Retrieve...` }, null, 2),
        null as any,
        "",
        {},
        0
      );

      // Simulate second request
      setTimeout(() => {
        actions.setResponse(
          JSON.stringify({ message: `Executing request 2 of ${totalRequests}: Fact Retrieve...` }, null, 2),
          null as any,
          "",
          {},
          0
        );

        // Simulate third request
        setTimeout(() => {
          if (isFirstRun) {
            // First run: 3 requests only
            const collectionResult = {
              collectionName: "Sample APIs",
              description: "A collection of public APIs that return successful responses.",
              totalRequests: 3,
              passed: 3,
              failed: 0,
              results: [
                {
                  requestName: "Order Retrieve",
                  endpoint: "GET https://jsonplaceholder.typicode.com/posts/1",
                  status: 200,
                  statusText: "OK",
                  executionTime: "145ms",
                  result: "PASSED"
                },
                {
                  requestName: "Fact Retrieve",
                  endpoint: "GET https://catfact.ninja/fact",
                  status: 200,
                  statusText: "OK",
                  executionTime: "203ms",
                  result: "PASSED"
                },
                {
                  requestName: "Echo GET Request",
                  endpoint: "GET https://httpbin.org/get?foo=bar&baz=qux",
                  status: 200,
                  statusText: "OK",
                  executionTime: "178ms",
                  result: "PASSED"
                }
              ],
              totalExecutionTime: "526ms",
              timestamp: new Date().toISOString()
            };

            actions.setResponse(
              JSON.stringify(collectionResult, null, 2),
              200,
              "OK",
              { "content-type": "application/json", "x-collection-run": "true" },
              526
            );
          } else {
            // Subsequent runs: 4 requests (including the hotel reservation)
            actions.setResponse(
              JSON.stringify({ message: `Executing request 3 of ${totalRequests}: Echo GET Request...` }, null, 2),
              null as any,
              "",
              {},
              0
            );

            // Simulate fourth request (hotel reservation)
            setTimeout(() => {
              actions.setResponse(
                JSON.stringify({ message: `Executing request 4 of ${totalRequests}: Hotel Reservation...` }, null, 2),
                null as any,
                "",
                {},
                0
              );

              setTimeout(() => {
                const collectionResult = {
                  collectionName: "Sample APIs",
                  description: "A collection of public APIs that return successful responses.",
                  totalRequests: 4,
                  passed: 4,
                  failed: 0,
                  results: [
                    {
                      requestName: "Order Retrieve",
                      endpoint: "GET https://jsonplaceholder.typicode.com/posts/1",
                      status: 200,
                      statusText: "OK",
                      executionTime: "145ms",
                      result: "PASSED"
                    },
                    {
                      requestName: "Fact Retrieve",
                      endpoint: "GET https://catfact.ninja/fact",
                      status: 200,
                      statusText: "OK",
                      executionTime: "203ms",
                      result: "PASSED"
                    },
                    {
                      requestName: "Echo GET Request",
                      endpoint: "GET https://httpbin.org/get?foo=bar&baz=qux",
                      status: 200,
                      statusText: "OK",
                      executionTime: "178ms",
                      result: "PASSED"
                    },
                    {
                      requestName: "Hotel Reservation",
                      endpoint: "POST https://abc.com/abc",
                      status: 200,
                      statusText: "OK",
                      executionTime: "127ms",
                      result: "PASSED"
                    }
                  ],
                  totalExecutionTime: "653ms",
                  timestamp: new Date().toISOString()
                };

                actions.setResponse(
                  JSON.stringify(collectionResult, null, 2),
                  200,
                  "OK",
                  { "content-type": "application/json", "x-collection-run": "true" },
                  653
                );
              }, 500);
            }, 400);
          }
        }, 600);
      }, 500);
    }, 400);
  }, 200);

  if (isFirstRun) {
    return (
      "🚀 Executing all requests in the **Sample APIs** collection...\n\n" +
      "I'm running **3 requests** sequentially:\n" +
      "1. Order Retrieve\n" +
      "2. Fact Retrieve\n" +
      "3. Echo GET Request\n\n" +
      "Check the **Response** section for the collection execution results!"
    );
  } else {
    return (
      "🚀 Executing all requests in the **Sample APIs** collection...\n\n" +
      "I'm running **4 requests** sequentially:\n" +
      "1. Order Retrieve\n" +
      "2. Fact Retrieve\n" +
      "3. Echo GET Request\n" +
      "4. Hotel Reservation *(newly added)*\n\n" +
      "Check the **Response** section for the collection execution results!"
    );
  }
}

// ── Public entry point ─────────────────────────────────────

const PREDEFINED_RESPONSES: Array<{
  match: (input: string) => boolean;
  respond: (actions: PlaygroundActions | null) => string;
}> = [
  {
    match: (input) => /change.*date.*body.*retry|retry.*change.*date|change.*date.*payload|change.*date|update.*date.*retry|fix.*date/i.test(input),
    respond: (actions) =>
      actions
        ? changeDatesAndRetry(actions)
        : "⚠️ Navigate to the API Playground first so I can modify the request body.",
  },
  {
    match: (input) => /run.*collection|execute.*collection|run all.*request|execute all|run.*all.*collection/i.test(input),
    respond: (actions) =>
      actions
        ? executeCollection(actions, "Demo Collection")
        : "⚠️ Navigate to the API Playground first so I can execute the collection.",
  },
  {
    match: (input) => /abc\.com\/abc|send.*request.*abc|execute.*abc|call.*abc/i.test(input),
    respond: (actions) =>
      actions
        ? executeInPlayground(actions)
        : "⚠️ Navigate to the API Playground first so I can execute the request.",
  },
  {
    match: (input) => /hello|hi|hey/i.test(input),
    respond: () =>
      "👋 Hey! I'm your API assistant. I can help you execute requests, modify payloads, run collections, and fetch Dynatrace logs. Try asking me to send a request to `abc.com/abc` or run a collection!",
  },
  {
    match: (input) => /help|what can you do/i.test(input),
    respond: () =>
      "I can help you with:\n\n" +
      "• **Execute a mock API call** – ask me to call `abc.com/abc`\n" +
      "• **Run a collection** – say \"run collection\" or \"execute all requests\"\n" +
      "• **Modify & retry requests** – say \"change the dates and retry\"\n" +
      "• **View Dynatrace logs** – say \"show dynatrace logs\"\n" +
      "• **Answer questions** about your workspace and collections\n\n" +
      "Just type your question below!",
  },
  {
    match: (input) => /dynatrace.*log|log.*dynatrace|show.*log|get.*log|fetch.*log/i.test(input),
    respond: () => {
      const timestamp = new Date().toISOString().replace("T", " ").substring(0, 19);

      if (lastMockResponseStatus === 400) {
        return (
          "📄 **Dynatrace Logs** — Hotel Reservation Service\n\n" +
          "```\n" +
          `[${timestamp}] INFO  ─────────────────────────────────────────────────\n` +
          `[${timestamp}] INFO  Incoming POST /api/reservations/hotel\n` +
          `[${timestamp}] INFO  Request ID: REQ-${Date.now()}\n` +
          `[${timestamp}] INFO  Service: hotel-reservation-service\n` +
          `[${timestamp}] INFO  ─────────────────────────────────────────────────\n` +
          `[${timestamp}] DEBUG Parsing request body...\n` +
          `[${timestamp}] DEBUG Guest: John Smith (john.smith@example.com)\n` +
          `[${timestamp}] DEBUG Hotel: HTL-MARRIOTT-NYC-001\n` +
          `[${timestamp}] DEBUG Check-in: ${lastMockRequestBody?.checkInDate || getPastDateString(30)}\n` +
          `[${timestamp}] DEBUG Check-out: ${lastMockRequestBody?.checkOutDate || getPastDateString(25)}\n` +
          `[${timestamp}] WARN  ⚠️ Date validation started...\n` +
          `[${timestamp}] ERROR ❌ VALIDATION_FAILED: Check-in date is in the past\n` +
          `[${timestamp}] ERROR ❌ VALIDATION_FAILED: Check-out date is in the past\n` +
          `[${timestamp}] ERROR ❌ Reservation rejected - Invalid dates provided\n` +
          `[${timestamp}] INFO  Response: 400 Bad Request\n` +
          `[${timestamp}] INFO  Error Code: INVALID_DATES\n` +
          `[${timestamp}] INFO  Execution time: 45ms\n` +
          "```\n\n" +
          "❌ **Status:** The reservation failed because the dates are in the past.\n\n" +
          "💡 *Tip: Ask me to \"change the dates and retry\" to fix this issue!*"
        );
      } else if (lastMockResponseStatus === 200) {
        return (
          "📄 **Dynatrace Logs** — Hotel Reservation Service\n\n" +
          "```\n" +
          `[${timestamp}] INFO  ─────────────────────────────────────────────────\n` +
          `[${timestamp}] INFO  Incoming POST /api/reservations/hotel\n` +
          `[${timestamp}] INFO  Request ID: REQ-${Date.now()}\n` +
          `[${timestamp}] INFO  Service: hotel-reservation-service\n` +
          `[${timestamp}] INFO  ─────────────────────────────────────────────────\n` +
          `[${timestamp}] DEBUG Parsing request body...\n` +
          `[${timestamp}] DEBUG Guest: John Smith (john.smith@example.com)\n` +
          `[${timestamp}] DEBUG Hotel: HTL-MARRIOTT-NYC-001 (Marriott Marquis New York)\n` +
          `[${timestamp}] DEBUG Room Type: DELUXE_SUITE\n` +
          `[${timestamp}] DEBUG Check-in: ${lastMockRequestBody?.checkInDate || getFutureDateString(7)}\n` +
          `[${timestamp}] DEBUG Check-out: ${lastMockRequestBody?.checkOutDate || getFutureDateString(12)}\n` +
          `[${timestamp}] DEBUG Number of nights: 5\n` +
          `[${timestamp}] INFO  ✅ Date validation passed\n` +
          `[${timestamp}] INFO  ✅ Room availability confirmed\n` +
          `[${timestamp}] INFO  ✅ Payment pre-authorization successful (VISA ****4242)\n` +
          `[${timestamp}] INFO  ✅ Creating reservation in database...\n` +
          `[${timestamp}] INFO  ✅ Reservation created: RES-NYC-MARRIOTT-00892\n` +
          `[${timestamp}] INFO  ✅ Confirmation number: CONF-HTL-2026-789456\n` +
          `[${timestamp}] INFO  ✅ Confirmation email sent to john.smith@example.com\n` +
          `[${timestamp}] INFO  Response: 200 OK\n` +
          `[${timestamp}] INFO  Execution time: 127ms\n` +
          "```\n\n" +
          "✅ **Status:** Hotel reservation created successfully!\n" +
          "📧 Confirmation email sent to the guest."
        );
      } else {
        return (
          "📄 **Dynatrace Logs** — API Gateway\n\n" +
          "```\n" +
          `[${timestamp}] INFO  No recent API calls to display.\n` +
          `[${timestamp}] INFO  Waiting for incoming requests...\n` +
          "```\n\n" +
          "ℹ️ Execute a request first to see the logs here."
        );
      }
    },
  },
  {
    match: (input) => /dynatrace.*error|error.*dynatrace|recent.*error.*dynatrace/i.test(input),
    respond: () => {
      if (lastMockResponseStatus === 400) {
        return (
          "❗ **Recent Errors** — Dynatrace\n\n" +
          `• ${new Date().toISOString().replace("T", " ").substring(0, 19)} – VALIDATION_FAILED: Check-in date is in the past\n` +
          `• ${new Date().toISOString().replace("T", " ").substring(0, 19)} – VALIDATION_FAILED: Check-out date is in the past\n\n` +
          "**Error Code:** INVALID_DATES\n" +
          "**Affected Service:** hotel-reservation-service\n\n" +
          "💡 *Fix: Update the dates to current or future dates and retry the request.*"
        );
      }
      return (
        "✅ **No Recent Errors** — Dynatrace\n\n" +
        "All API calls completed successfully. No errors in the last hour."
      );
    },
  },
  {
    match: (input) => /dynatrace.*performance|performance.*dynatrace|metrics.*dynatrace/i.test(input),
    respond: () =>
      "📊 **Dynatrace Performance Metrics** — Hotel Reservation Service\n\n" +
      "• Avg response time: 127ms\n" +
      "• 95th percentile: 245ms\n" +
      "• Requests/min: 156\n" +
      "• Error rate: 2.3%\n" +
      "• Successful reservations today: 847\n",
  },
];

export function getBotResponse(userInput: string, actions: PlaygroundActions | null): string {
  for (const entry of PREDEFINED_RESPONSES) {
    if (entry.match(userInput)) {
      return entry.respond(actions);
    }
  }
  return "🤔 I'm not sure how to help with that yet. Try asking me to send a request to `abc.com/abc` or to change dates in the body and retry the request.";
}
