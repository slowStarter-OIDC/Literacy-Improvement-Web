// Seo
import Head from "next/head";

export default function Seo({ title, subtitle }) {
  return (
    <Head>
      <title> {title} | {subtitle} </title>
    </Head>
  )
}