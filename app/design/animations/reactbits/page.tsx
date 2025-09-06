// ReactBits Animation Demo Page
"use client";
import { PreviewTile } from "@/components/preview/preview-tile";
import LogoLoop from "@/components/LogoLoop";
import ClickSpark from "@/components/ClickSpark";
import MetaBalls from "@/components/MetaBalls";
import FadeContent from "@/components/FadeContent";
import Ribbons from "@/components/Ribbons";

export default function Page() {
  return (
    <>
      <PreviewTile
        title="LogoLoop"
        description="Animated looping row of logos"
        componentName="logoloop"
        code={`import LogoLoop from "@/components/LogoLoop";\n<LogoLoop logos={[{ src: "/assets/logos/vercel.svg", alt: "Vercel" }]} />`}
      >
        {() => (
          <div className="bg-white rounded shadow p-4">
            <LogoLoop
              logos={[
                { src: "/assets/logos/vercel.svg", alt: "Vercel" },
                { src: "/assets/logos/nextjs.svg", alt: "Next.js" },
                { src: "/assets/logos/react.svg", alt: "React" },
              ]}
              speed={100}
              width={320}
              logoHeight={32}
              gap={24}
            />
          </div>
        )}
      </PreviewTile>
      <PreviewTile
        title="ClickSpark"
        description="Spark animation on click"
        componentName="clickspark"
        code={`import ClickSpark from "@/components/ClickSpark";\n<ClickSpark><button>Click Me</button></ClickSpark>`}
      >
        {() => (
          <div className="flex justify-center">
            <ClickSpark>
              <button className="px-6 py-2 rounded bg-primary text-white">Click Me</button>
            </ClickSpark>
          </div>
        )}
      </PreviewTile>
      <PreviewTile
        title="MetaBalls"
        description="Animated metaballs canvas"
        componentName="metaballs"
        code={`import MetaBalls from "@/components/MetaBalls";\n<MetaBalls ballCount={10} />`}
      >
        {() => (
          <div className="h-40 w-full">
            <MetaBalls ballCount={10} />
          </div>
        )}
      </PreviewTile>
      <PreviewTile
        title="FadeContent"
        description="Content fades in on scroll"
        componentName="fadecontent"
        code={`import FadeContent from "@/components/FadeContent";\n<FadeContent><div>Fades In</div></FadeContent>`}
      >
        {() => (
          <FadeContent>
            <div className="text-lg font-semibold p-8 bg-white rounded shadow text-center">Fades In</div>
          </FadeContent>
        )}
      </PreviewTile>
      <PreviewTile
        title="Ribbons"
        description="Animated colorful ribbons"
        componentName="ribbons"
        code={`import Ribbons from "@/components/Ribbons";\n<Ribbons />`}
      >
        {() => (
          <div className="h-40 w-full">
            <Ribbons />
          </div>
        )}
      </PreviewTile>
    </>
  );
}
