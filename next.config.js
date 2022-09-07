const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  // async redirects() {
  //   return [
  //     {
  //       source: "/departments",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },
  // async headers() {
  //   return [
  //     {
  //       source: '/',
  //       headers: [
  //         {
  //           key: 'API_PASSWORD',
  //           value: 'aYI5202kldXcLAxanvdwkfwsklLZcgfjkLSMDKh6tk',
  //         },
  //         {
  //           key: 'Authorization',
  //           value: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjYyMzk0NjE5LCJleHAiOjE2NjI0ODEwMTksIm5iZiI6MTY2MjM5NDYxOSwianRpIjoiVjRyMjVHZGx2a1FMS2lyNiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zf0X6Cp7qph9K2BzyecLP8atwXEXdVjesUFL9A-smg4',
  //         },
  //       ],
  //     },
  //   ]
  // },

  async redirects() {
    return [
      {
        source: "/departments/0",
        destination: "/",
        permanent: true,
      },

      
    ];
  },
  images: {
    domains: [
      "images.unsplash.com",
      "www.mall-alamer.com",
      "tofm.com.sa",
      "github.com",
      "raw.githubusercontent.com",
    ],
  },
});
