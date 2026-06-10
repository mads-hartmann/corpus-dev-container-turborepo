/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow Ona exposed-port hosts (<port>--<env-id>.<runner-domain>) to reach
  // the dev server, which otherwise blocks cross-origin development requests.
  allowedDevOrigins: ["*.flex.doptig.cloud"],
};

export default nextConfig;
