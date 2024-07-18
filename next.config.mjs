/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/pdf/:path*', // Menentukan pola URL untuk file PDF
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename=:path*', // Menggunakan nama file asli
          },
        ],
      },
    ];
  },
};

export default nextConfig;
