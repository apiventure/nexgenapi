import { createContext, useContext, useRef, useCallback } from "react";

// Actions the API Playground registers so the chatbot (or mock interceptor) can drive the app.
export interface PlaygroundActions {
  setUrl: (url: string) => void;
  setMethod: (method: string) => void;
  setBodyInput: (body: string) => void;
  getBodyInput: () => string;
  getUrl: () => string;
  triggerSend: () => void;
  setResponse: (preview: string, status: number, statusText: string, headers: Record<string, string>, time: number) => void;
}

interface PlaygroundAgentContextValue {
  actionsRef: React.MutableRefObject<PlaygroundActions | null>;
  register: (actions: PlaygroundActions) => void;
  getActions: () => PlaygroundActions | null;
}

const PlaygroundAgentContext = createContext<PlaygroundAgentContextValue | null>(null);

export function PlaygroundAgentProvider({ children }: { children: React.ReactNode }) {
  const actionsRef = useRef<PlaygroundActions | null>(null);

  const register = useCallback((actions: PlaygroundActions) => {
    actionsRef.current = actions;
  }, []);

  const getActions = useCallback(() => actionsRef.current, []);

  return (
    <PlaygroundAgentContext.Provider value={{ actionsRef, register, getActions }}>
      {children}
    </PlaygroundAgentContext.Provider>
  );
}

export function usePlaygroundAgent() {
  const ctx = useContext(PlaygroundAgentContext);
  if (!ctx) throw new Error("usePlaygroundAgent must be used within PlaygroundAgentProvider");
  return ctx;
}
