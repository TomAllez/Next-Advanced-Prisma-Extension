import React from "react"

import { useSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"

import prisma from "../../lib/prisma"

export default function Home({ connected }) {
  return (
    <div>
      <Head>
        <title>Next.js full stack template.</title>

        <meta
          name="description"
          content="Use tailwind css, eslint, prettier & absolute imports instantly.
            Easily extendable zero-config template for pros and beginners."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignalTestersContainers>
        <PrismaConnectionSign connected={connected} />
        <NextAuthenticationSign connected={connected} />
      </SignalTestersContainers>
      <main className="flex justify-center min-h-screen py-20 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100">
        <div>
          <h1 className="px-5 text-4xl font-bold leading-tight tracking-tight text-center sm:mt-4 sm:text-6xl">
            Next.js
            <br />
            Advanced Starter
          </h1>

          <h2 className="max-w-4xl px-10 mx-auto mt-8 text-base tracking-tight text-center text-gray-600 sm:text-2xl md:mt-5 md:text-2xl">
            Tailwind CSS 3.0, ESLint & Prettier without a single line of config!
            Easily extendable zero-config template for pros and beginners.
          </h2>

          <h2 className="flex flex-row items-center justify-center max-w-2xl py-6 mx-auto mt-8 text-base tracking-tight text-center text-white rounded rotate-2 bg-gradient-to-r from-pink-500 to-orange-500 sm:text-2xl md:mt-5 md:text-2xl">
            <span className="mr-2 font-extrabold"> Extend with </span> Prisma +
            NextAuth + Docker
            <p className="text-5xl animate-bounce">👇</p>
          </h2>

          <div className="px-4 sm:px-0">
            <section
              className="mt-6 grid min-h-[350px] w-full grid-cols-1 rounded-lg bg-white sm:mt-20 sm:min-w-[1000px] sm:grid-cols-2"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 30px 60px 0px",
              }}
            >
              <div className="flex flex-col justify-center rounded-l-lg bg-gray-50">
                <FeatureList>
                  <Feature main="Tailwind CSS">
                    Fast design workflow with <InfoText text="Tailwind CSS" />
                  </Feature>

                  <Feature main="TypeScript">
                    <InfoText text="TypeScript" /> by default
                  </Feature>

                  <Feature main="ESLint config">
                    Customizable <InfoText text="ESLint config" />
                  </Feature>

                  <Feature main="Code formatting">
                    <InfoText text="Code formatting" /> with Prettier
                  </Feature>

                  <Feature main="Absolute imports">
                    Standardized <InfoText text="absolute imports" />
                  </Feature>

                  <Feature main="Absolute imports">
                    Ready-to-go <InfoText text="Jest" /> setup
                  </Feature>
                </FeatureList>
              </div>

              <div className="px-4 py-24 space-y-5 text-center place-self-center">
                <h3 className="text-3xl font-bold">Get it 👇</h3>

                <span className="inline-flex rounded-md shadow-sm">
                  <Link
                    href="https://github.com/agcty/nextjs-advanced-starter"
                    type="button"
                    className="inline-flex items-center px-4 py-4 font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 active:bg-blue-700 sm:px-10"
                  >
                    Copy Template from GitHub
                  </Link>
                </span>
              </div>
            </section>
            <p className="mt-6 text-xs font-medium text-center text-gray-600">
              Built by{" "}
              <a
                className="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:underline focus:outline-none"
                href="https://twitter.com/agctyz"
              >
                @agctyz
              </a>
            </p>
          </div>

          <div className="px-4 sm:px-0">
            <h3 className="max-w-2xl mx-auto mt-8 text-base tracking-tight text-center rounded sm:text-2xl md:mt-5 md:text-2xl">
              <span className="font-extrabold">Extension : </span>
            </h3>
            <section
              className="grid min-h-[350px] w-full grid-cols-1 rounded-lg bg-white sm:mt-4 sm:min-w-[1000px] sm:grid-cols-2"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 30px 60px 0px",
              }}
            >
              <div className="flex flex-col justify-center bg-gray-800 rounded-l-lg">
                <FeatureList>
                  <Feature main="Prisma" flavor={Flavor.Extension}>
                    Connect your Database with <InfoText text="Prisma" />
                  </Feature>

                  <Feature main="Docker" flavor={Flavor.Extension}>
                    with <InfoText text="Docker" /> deploy everywhere
                  </Feature>

                  <Feature main="ESLint config" flavor={Flavor.Extension}>
                    Secure with <InfoText text="Next Auth" />
                  </Feature>
                </FeatureList>
              </div>

              <div className="px-4 py-24 space-y-5 text-center place-self-center">
                <h3 className="text-3xl font-bold">Get it 👇</h3>
                <span className="inline-flex rounded-md shadow-sm">
                  <Link
                    href="https://github.com/tallez/Next-Advanced-Prisma-Extension"
                    type="button"
                    className="inline-flex items-center px-4 py-4 font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-gradient-to-r from-pink-500 to-orange-500 hover:bg-orange-500 focus:border-orange-700 focus:outline-none focus:ring-4 focus:ring-red-400 active:bg-red-700 sm:px-10"
                  >
                    Copy Template from GitHub
                  </Link>
                </span>
              </div>
            </section>
            <p className="mt-6 text-xs font-medium text-center text-gray-600">
              Extended by{" "}
              <a
                className="font-medium text-orange-600 transition duration-150 ease-in-out hover:text-orange-500 focus:underline focus:outline-none"
                href="https://github.com/tallez"
              >
                @tallez
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

interface FeatureListProps {
  children: React.ReactNode
}

function FeatureList({ children }: FeatureListProps) {
  return <ul className="px-12 py-12 space-y-5">{children}</ul>
}

enum Flavor {
  Original = "original",
  Extension = "extension",
}

function Feature({
  children,
  main,
  flavor = Flavor.Original,
}: {
  children: React.ReactNode
  main: string
  flavor?: Flavor
}) {
  if (flavor === "original") {
    var checkIconClass =
      "hiddden hidden h-5 w-5 flex-shrink-0 rounded-full bg-blue-600 p-1 text-gray-100 sm:inline"
    var textClass = "ml-3 hidden text-lg text-gray-600 sm:inline"
  } else if (flavor === "extension") {
    var checkIconClass =
      "hiddden hidden h-5 w-5 flex-shrink-0 rounded-full bg-pink-600 p-1 text-gray-100 sm:inline"
    var textClass = "ml-3 hidden text-lg text-white sm:inline"
  }
  return (
    <li className="flex items-center">
      <CheckIcon className={checkIconClass} />
      <p className={textClass}>{children}</p>

      <p className="mx-auto sm:hidden">
        <InfoText text={main} />
      </p>
    </li>
  )
}

function InfoText({ text }) {
  return (
    <span className="inline-flex items-center px-3 py-2 font-medium text-gray-700 bg-gray-100 rounded-md">
      <CheckIcon className="inline-flex flex-shrink-0 w-5 h-5 p-1 mr-3 text-gray-100 bg-blue-600 rounded-full sm:hidden" />
      {text}
    </span>
  )
}

function CheckIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

function SignalTestersContainers({ children }) {
  return (
    <div className="fixed top-0 right-0 hidden m-4 space-y-2 lg:block ">
      {children}
    </div>
  )
}

function PrismaConnectionSign({ connected }: { connected: boolean }) {
  var signal: React.ReactNode
  var classSignal: string
  if (connected) {
    signal = <div className="w-2 h-2 bg-green-500 rounded-full"></div>
    classSignal =
      "flex items-center justify-center space-x-4 rounded bg-gradient-to-r from-pink-500 to-orange-500 p-4"
  } else {
    signal = <div className="w-2 h-2 bg-purple-800 rounded-full"></div>
    classSignal =
      "flex items-center justify-center space-x-4 rounded bg-gradient-to-r from-teal-500 to-blue-500 p-4"
  }

  return (
    <div className={classSignal}>
      <span className="text-white">
        Prisma client is{" "}
        <span className="font-extrabold">
          {connected ? "connected" : "disconnected"}
        </span>
      </span>
      {signal}
    </div>
  )
}

function NextAuthenticationSign({ connected }: { connected: boolean }) {
  const { data: session, status } = useSession()

  if (connected && session) {
    return (
      <Link href="/api/auth/signout" passHref legacyBehavior>
        <div className="flex items-center justify-center p-4 space-x-4 rounded bg-gradient-to-r from-pink-500 to-orange-500">
          <span className="text-white">Valid NextAuth Session</span>
        </div>
      </Link>
    )
  } else if (!connected) {
    return (
      <div className="flex items-center justify-center p-4 space-x-4 rounded cursor-no-drop bg-gradient-to-r from-gray-100 to-gray-300">
        <span className="text-gray-500">Need a connected Database</span>
      </div>
    )
  } else {
    return (
      <Link href="/api/auth/signin" passHref legacyBehavior>
        <div className="flex items-center justify-center p-4 space-x-4 rounded cursor-pointer bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-700 hover:to-blue-500">
          <span className="text-white">No NextAuth session</span>
        </div>
      </Link>
    )
  }
}

export async function getServerSideProps() {
  try {
    await prisma.$connect()
    return {
      props: {
        connected: true,
      },
    }
  } catch (error) {
    return {
      props: {
        connected: false,
      },
    }
  } finally {
    await prisma.$disconnect()
  }
}
