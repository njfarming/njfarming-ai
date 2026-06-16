"use client";

import Image from "next/image";
import React from "react";
import { topicPages, TopicPageData } from "@/data/topicPages";

function normalizeYoutubeUrl(url: string) {
  const embedMatch = url.match(/^https?:\/\/www\.youtube\.com\/embed\/([A-Za-z0-9_-]+)/);
  if (embedMatch) return url;

  const watchMatch = url.match(/^https?:\/\/www\.youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;

  const shortMatch = url.match(/^https?:\/\/youtu\.be\/([A-Za-z0-9_-]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;

  return url;
}

function ResourceCard({
  resource,
}: {
  resource: TopicPageData["resources"][number];
}) {
  return (
    <a
      href={resource.href}
      target={resource.href.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      className="group block rounded-3xl border border-green-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="text-sm uppercase tracking-wide text-green-700 font-semibold mb-2">
        {resource.type}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.label}</h3>
      <p className="text-gray-600">{resource.description}</p>
    </a>
  );
}

function FAQItem({ faq }: { faq: TopicPageData["faqs"][number] }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="rounded-3xl border border-green-200 bg-white p-6 shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-lg font-semibold text-gray-900">
          {faq.question}
        </span>
        <span className="text-green-700 font-bold">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-4 text-gray-700">{faq.answer}</p>}
    </div>
  );
}

export default function TopicPageRenderer({ slug }: { slug: string }) {
  const topic = topicPages[slug];

  if (!topic) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-green-800">Topic not found</h1>
        <p className="mt-4 text-gray-600">
          Please return to the home page and select a valid topic.
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden rounded-b-[4rem] bg-gradient-to-r from-green-800 to-emerald-700 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.4),_transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto grid gap-10 px-4 py-20 md:grid-cols-[1.5fr_1fr] items-center">
          <div>
            <h1 className="mt-4 text-5xl font-bold leading-tight">
              {topic.title}
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-2xl">
              {topic.subtitle}
            </p>
            <p className="mt-6 text-base leading-8 text-green-100/90 max-w-2xl">
              {topic.description}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl bg-white/10">
            <Image
              src={topic.image}
              alt={topic.title}
              width={900}
              height={600}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-3xl bg-black/60 px-5 py-4 text-white backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-green-200">
                Watch
              </p>
              <p className="mt-2 text-lg font-bold">Featured Video</p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800">What You'll Learn</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {topic.description}
        </p>

        <div className="mt-10 flex gap-3">
          {/* flex-wrap */}
          {topic.highlights.slice(0, 3).map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-3xl border-green-100 bg-green-50 px-5 py-4 shadow-sm backdrop-blur"
            >
              <h3 className="font-semibold text-green-800">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 grid gap-8 lg:grid-cols-[0.9fr_0.7fr]">
        <div className="space-y-8">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-green-800">
              Featured Video
            </h2>
            <p className="mt-3 text-gray-600">
              Learn by watching a short, practical video on this topic.
            </p>
            <div className="mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-green-200 bg-black">
              <iframe
                src={normalizeYoutubeUrl(topic.videoUrl)}
                title={topic.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {topic.resources.map((resource) => (
              <ResourceCard key={resource.label} resource={resource} />
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-green-800">Quick Facts</h2>
            <ul className="mt-6 space-y-4 text-gray-700">
              {topic.highlights.map((fact) => (
                <li
                  key={fact.title}
                  className="rounded-2xl border border-green-100 bg-green-50 p-4"
                >
                  <strong className="block text-green-800">{fact.title}</strong>
                  <span>{fact.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-green-800">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-3">
              {topic.faqs.map((faq) => (
                <FAQItem key={faq.question} faq={faq} />
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
