import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  Layout,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CompanyCarousel from "@/components/company-carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/data/faqs";

const features = [
  {
    title: "Task Management",
    description:
      "Organize and prioritize your tasks with our intuitive task management system.",
    icon: Layout,
  },
  {
    title: "Collaboration Tools",
    description:
      "Enhance team collaboration with real-time chat, file sharing, and discussion boards.",
    icon: Users,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor project progress with visual dashboards and detailed reports.",
    icon: Activity,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* {HERO SECTION}  */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg-text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline your workflow <br />
          <span className="flex mx-auto gap-3 sm-gap-4 items-center">
            with{""}
            <Image
              src={"/logo2.png"}
              alt="Zcrum Logo"
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain pt-2"
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto pb-2">
          Empower your team with our intuitive project management solution.
        </p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-2">
            Get Started <ChevronRight size={18} className="" />
          </Button>
        </Link>
        <Link href="#features">
          <Button size="lg" variant="outline" className="mr-4">
            Learn More <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
      </section>
      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>
      <section className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
        <section className="py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-xl mb-12">
            Join thousands of teams already using ZCRUM to streamline their
            projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
