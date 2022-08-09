/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  
  async rewrites() {

    return [
      {
        source: "/api/kakaoAuth",
        destination: process.env.KAKAO_AUTH_URL,
      },
      {
        source: "/api/searchWord/:q",
        destination: `https://opendict.korean.go.kr/api/search?key=${process.env.OPENDICT_API_KEY}&q=:q&num=20&sort=dict&req_type=json&advanced=y&method=include`,
      }
    ]
  }
}

module.exports = nextConfig
