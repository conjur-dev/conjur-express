export interface LoggerInterface {
  Debug: (message: string) => void;
  Info: (message: string) => void;
  Warn: (message: string) => void;
  Error: (message: string) => void;
};
