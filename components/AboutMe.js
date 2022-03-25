import Image from "next/image";

import { P, H1, H2, A } from "./markdown-components";
import avatar from "../public/static/avatar-1440x1440.jpg";
import ntu from "../public/static/ntu-360x360.png";
import chief from "../public/static/chief-360x360.png";
import shopee from "../public/static/shopee-360x360.png";
import jimmylinOrgIndex from "../public/static/jimmylin-org-index-1920x1029.png";
import jimmylinOrgPost from "../public/static/jimmylin-org-post1-1920x1029.png";
import ctdbLogin from "../public/static/ctdb-login-1920x1029.png";
import ctdbReminder from "../public/static/ctdb-reminder-1920x1029.png";
import ctdbDiaryI18n from "../public/static/ctdb-diary-i18n-1920x1029.png";
import ctdbLog from "../public/static/ctdb-log-1920x1029.png";

const AboutMe = () => {
  return (
    <>
      <H1>About me</H1>
      <div className="mb-8 max-w-lg">
        <Image
          src={avatar}
          alt={avatar}
          className="rounded-full"
          priority={true}
        />
      </div>
      <H1>Hello world</H1>
      <P>
        I&apos;m Jimmy. I love programming. I like to create things and
        programming gives me the chance to do so.
      </P>
      <P>
        I have five years of programming experience, mostly in{" "}
        <A href="https://www.python.org/">Python</A> and web development.
      </P>
      <H1>Education</H1>
      <div className="mb-5 flex items-center justify-between gap-8">
        <div>
          <div>
            <A href="https://www.ntu.edu.tw/">NTU</A>, Taipei. Mech Eng.
          </div>
          <div className="text-sm">Sep. 2011 - Jun. 2016</div>
        </div>
        <div className="xs:w-36 xs:h-36 relative mb-5 h-24 w-24">
          <Image
            src={ntu}
            alt="ntu"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
      <H1>Experience</H1>
      <div className="mb-5 flex items-center justify-between gap-8">
        <div>
          <div>
            <A href="https://shopee.tw/">Shopee Taiwan</A>
          </div>
          <div className="text-sm">Oct. 2021 -</div>
          <P>Backend engineer.</P>
        </div>
        <div className="xs:w-36 xs:h-36 relative mb-5 h-24 w-24">
          <Image
            src={shopee}
            alt="shopee"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
      <div className="mb-5 flex items-center justify-between gap-8">
        <div>
          <div>
            <A href="https://www.chief.com.tw/">Chief Telecom</A>
          </div>
          <div className="text-sm">Jun. 2017 - Jun. 2021</div>
          <P>Cloud service engineer.</P>
        </div>
        <div className="xs:w-36 xs:h-36 relative mb-5 h-24 w-24">
          <Image
            src={chief}
            alt="chief"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
      <H1>Skills</H1>
      <P>Here are my skills and the techniques I use:</P>
      <H2>Python</H2>
      <P>
        <A href="https://www.python.org/">Python</A> is my primary programming
        language. I am familiar with Python&apos;s language features and many of
        its standard libraries such as{" "}
        <A href="https://docs.python.org/3/library/unittest.html">unittest</A>
        , <A href="https://docs.python.org/3/library/logging.html">
          logging
        </A>{" "}
        and <A href="https://docs.python.org/3/library/shlex.html">shlex</A>,
        etc. I care about code quality, following{" "}
        <A href="https://www.python.org/dev/peps/pep-0008/">PEP8</A>
         and many other code style conventions. I follow the{" "}
        <A href="https://en.wikipedia.org/wiki/KISS_principle">KISS</A>. I keep
        my code clean, modular and reusable.
      </P>
      <H2>Django</H2>
      <P>
        <A href="https://www.djangoproject.com/">Django</A> is a Python&apos;s
        web framework I&apos;ve spent most of my time with. I&apos;ve been doing
        web development with Django for over 5 years. I can build modern,
        well-tested web application with it.
      </P>
      <H2>Django REST Framwork</H2>
      <P>
        Django is pretty good, but when you combine it with 
        <A href="https://www.django-rest-framework.org/">
          Django REST Framework
        </A>
        , it gets even better. Modern web applications often require REST APIs,
        and this is where the Django REST Framework comes in.
      </P>
      <H2>SQL</H2>
      <P>
        Django has a great model/ORM system, which makes it possible to creating
        a web application without writing SQL. But sometimes SQL knowledge is
        important, too. It is true especially when it comes to a extremely
        complicated queriy or some performance issue.
      </P>
      <H2>React.js / Next.js</H2>
      <P>
        Now, when it comes to frontend things, 
        <A href="https://reactjs.org/">React.js</A> is my favorite. Its
        philosophy is so graceful, making you enjoy coding and building things
        with it. This website is built with React.js, too.{" "}
        <A href="https://nextjs.org/">Next.js</A> gives me a lot of things out
        of the box. It lets me not worry about the 
        <A href="https://nextjs.org/docs/basic-features/data-fetching">
          SSG/SSR
        </A>
         things, which is pretty annoying to implement on our own.
      </P>
      <H2>Vue.js</H2>
      <P>
        In addition to React.js, I also use 
        <A href="https://vuejs.org/">Vue.js</A>. I personally like React.js
        more, but they are both very powerful andd reliable frameworks.
      </P>
      <H2>Tailwind CSS</H2>
      <P>
        <A href="https://tailwindcss.com/">Tailwind CSS</A> is another tool that
        I love and use a lot. It is similar to 
        <A href="https://getbootstrap.com/">Bootstrap</A>, but it is much more
        flexible and easy to customize, which prevents you from building a lot
        of similar web.
      </P>
      <H2>HTML / CSS / JavaScript</H2>
      <P>
        In addition to developing with frontend frameworks, I also know about
        HTML/CSS/JavaScript. I think, after all, frameworks are based on these
        three elements, so it is important to have a solid understanding of
        them.
      </P>
      <H2>GitHub Actions</H2>
      <P>
        I use <A href="https://docs.github.com/en/actions">Github actions</A> to
        handle CI/CD things. I believe that deployment is just as important as
        development. If a feature can&apos;t be delivered to the users, the
        resources spent on development will be wasted.
      </P>
      <H2>Docker</H2>
      <P>
        I mostly run my services in <A href="https://www.docker.com/">Docker</A>
        , which frees me from a lot of environment and compatibility concerns.
        Docker greatly increases the portability and flexibility of the
        services.
      </P>
      <H2>GCP</H2>
      <P>
        <A href="https://cloud.google.com/gcp">GCP</A> is where most of my
        services are hosted. This website is such a example. I usually use their
        compute engines with Docker.
      </P>
      <H1>Portfolios</H1>
      <H2>
        <A href="https://github.com/j3ygh/jimmylin.org">jimmylin.org</A>
      </H2>
      <P>My personal blog, mainly built with Next.js.</P>
      <div className="mb-8">
        <Image
          src={jimmylinOrgIndex}
          alt={jimmylinOrgIndex}
          className="rounded-lg"
          priority={true}
        />
        <P>
          I post things here. They are usually about programming and
          development.
        </P>
      </div>
      <div className="mb-8">
        <Image
          src={jimmylinOrgPost}
          alt={jimmylinOrgPost}
          className="rounded-lg"
          priority={true}
        />
      </div>
      <P>
        It is mainly built with 
        <A href="https://nextjs.org">Next.js</A>
        , <A href="https://tailwindcss.com">Tailwind CSS</A> and{" "}
        <A href="https://mdxjs.com">MDX</A>, hosted by{" "}
        <A href="https://vercel.com">Vercel </A>. I write and post things here.{" "}
        <A href="https://mdxjs.com">MDX</A> makes it easy to write markdown
        files and use them in <A href="https://nextjs.org">Next.js</A>.
      </P>
      <H2>
        <A href="https://github.com/j3ygh/ctdb">ctdb</A>
      </H2>
      <P>A web UI of many reusable applications, mainly built with Django.</P>
      <div className="mb-8">
        <Image
          src={ctdbLogin}
          alt={ctdbLogin}
          className="rounded-lg"
          priority={true}
        />
        <P>The login page.</P>
      </div>
      <div className="mb-8">
        <Image
          src={ctdbReminder}
          alt={ctdbReminder}
          className="rounded-lg"
          priority={true}
        />
        <P>Reminder, one of the applications.</P>
      </div>
      <div className="mb-8">
        <Image
          src={ctdbDiaryI18n}
          alt={ctdbDiaryI18n}
          className="rounded-lg"
          priority={true}
        />
        <P>Every application works with i18n.</P>
      </div>
      <div className="mb-8">
        <Image
          src={ctdbLog}
          alt={ctdbLog}
          className="rounded-lg"
          priority={true}
        />
        <P>Every data change will be logged.</P>
      </div>
      <P>
        It is mainly built with 
        <A href="https://www.djangoproject.com/">Django</A>, 
        <A href="https://www.django-rest-framework.org/">
          Django REST Framework
        </A>
        , <A href="https://vuejs.org/">Vue.js</A>, containing several useful
        applications, such as Diary, Reminder, Telecom, News, Archive, etc. It
        also has its own log system. It is mainly used by engineers in the
        technical department of the company.
      </P>
      <H1>Thank you</H1>
      <P>
        thank you for giving a chance to introduce myself. I really appreciate
        that. Feel free to contact me if you want.
      </P>
    </>
  );
};

export default AboutMe;
