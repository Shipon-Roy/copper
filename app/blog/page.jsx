// components/BlogSection.jsx
"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title:
      "Your ‘Surge Capacity’ Is Depleted It’s Why You Feel Awful to The Society",
    category: "Technology",
    date: "14 Mar, 2025",
    readTime: "02 Mins read",
    image: "/assets/blog/01.webp",
    link: "/blog/post-1",
  },
  {
    id: 2,
    title:
      "Your ‘Surge Capacity’ Is Depleted It’s Why You Feel Awful to The Society",
    category: "Science",
    date: "14 Mar, 2025",
    readTime: "02 Mins read",
    image: "/assets/blog/02.webp",
    link: "/blog/post-2",
  },
  {
    id: 3,
    title:
      "Your ‘Surge Capacity’ Is Depleted It’s Why You Feel Awful to The Society",
    category: "Technology",
    date: "14 Mar, 2025",
    readTime: "02 Mins read",
    image: "/assets/blog/03.webp",
    link: "/blog/post-3",
  },
  {
    id: 4,
    title:
      "Your ‘Surge Capacity’ Is Depleted It’s Why You Feel Awful to The Society",
    category: "Science",
    date: "14 Mar, 2025",
    readTime: "02 Mins read",
    image: "/assets/blog/04.webp",
    link: "/blog/post-4",
  },
  {
    id: 5,
    title:
      "Your ‘Surge Capacity’ Is Depleted It’s Why You Feel Awful to The Society",
    category: "Technology",
    date: "14 Mar, 2025",
    readTime: "02 Mins read",
    image: "/assets/blog/05.webp",
    link: "/blog/post-5",
  },
  {
    id: 6,
    title:
      "Your ‘Surge Capacity’ Is Depleted It’s Why You Feel Awful to The Society",
    category: "Science",
    date: "14 Mar, 2025",
    readTime: "02 Mins read",
    image: "/assets/blog/06.webp",
    link: "/blog/post-6",
  },
];

export default function BlogPage() {
  return (
    <section>
      <div className="relative bg-gray-200 py-24 overflow-hidden">
        <Image
          src="/assets/home/banner.svg"
          alt="banner brush"
          width={732}
          height={1050}
          className="absolute bottom-0 left-0 w-full h-auto"
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl text-gray-700 font-bold">Blogs</h2>

          <nav aria-label="breadcrumb" className="mt-4">
            <ol className="flex justify-center items-center gap-3 text-gray-700">
              <li>
                <Link href="/" className="hover:text-primary font-medium">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary font-medium">Blogs</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="bg-white">
        <Container>
          <div className="container  mx-auto text-center">
            <h2 className="text-3xl text-gray-800 font-bold mb-4">
              Find A <strong>Source Of Knowledge</strong>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat sed.
            </p>
          </div>

          <div className="container mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <Link href={blog.link} className="block">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={366}
                    height={425}
                    className="w-full h-[250px] object-cover"
                  />
                </Link>
                <div className="p-4">
                  <Link href={`/categories/${blog.category.toLowerCase()}`}>
                    <span className="text-sm font-semibold text-gray-800">
                      {blog.category}
                    </span>
                  </Link>
                  <Link href={blog.link}>
                    <h3 className="text-lg font-medium mt-2 mb-2 text-gray-800 ">
                      {blog.title}
                    </h3>
                  </Link>
                  <div className="text-gray-400 text-sm mb-2">
                    <span>{blog.date}</span> | <span>{blog.readTime}</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                    et ipsum ullamcorper venenatis fringilla. Pretium, purus eu
                    nec vulputate vel habitant egestas.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
