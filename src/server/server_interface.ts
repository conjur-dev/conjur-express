export interface ServerInterface {
  Start: () => Promise<void>;
  Stop: () => Promise<void>;
};
