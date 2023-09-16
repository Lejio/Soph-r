import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "sopher",
  webDir: "out",
  server: {
    androidScheme: "https",
    url: "http://10.195.156.8:3000",
    cleartext: true,
  },
};

export default config;
