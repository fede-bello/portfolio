/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSUBMIT_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
