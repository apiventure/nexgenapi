import  * as util from "./util";

export function buildRequestUrlPreview({ paramsRows, url }) {
  const queryParams = paramsRows
    .filter((row) => row.enabled && row.key.trim())
    .map((row) => `${encodeURIComponent(row.key)}=${encodeURIComponent(row.value)}`)
    .join("&");

  const requestUrlPreview = queryParams
    ? `${url}${url.includes("?") ? "&" : "?"}${queryParams}`
    : url;

  return { queryParams, requestUrlPreview };
}

export function buildCurlParts({ headerRows, canSendBody, bodyInput, method, requestUrlPreview }) {
    const curlBody = canSendBody && bodyInput.trim()
  ? `--data '${util.escapeSingleQuotes(bodyInput)}'`
    : "";

  const curlHeaders = headerRows
    .filter((row) => row.enabled && row.key.trim())
    .map((row) => `--header '${util.escapeSingleQuotes(row.key)}: ${util.escapeSingleQuotes(row.value)}'`)
    .join(" ");

  const curlCommand = [
    `curl --location --request ${method}`,
    `'${util.escapeSingleQuotes(requestUrlPreview)}'`,
    curlHeaders,
    curlBody,
  ]
    .filter(Boolean)
    .join(" \n");
  return { curlHeaders, curlBody, curlCommand };
}

export const onCopyCurlClick = async ({ curlCommand, setCopyMessage }) => {
    try {
        await navigator.clipboard.writeText(curlCommand);
        setCopyMessage("Copied");
    } catch {
        setCopyMessage("Copy failed");
    }
  setTimeout(() => setCopyMessage(""), util.COPY_MESSAGE_DURATION_MS);
};