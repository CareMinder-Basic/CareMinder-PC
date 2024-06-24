/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IS_DEV?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
