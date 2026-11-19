import LenisProvider from "@/components/LenisProvider";
import ArchFrame from "@/components/ArchFrame";
import Manifesto from "@/components/sections/Manifesto";
import StudioStandard from "@/components/sections/StudioStandard";
import Capabilities from "@/components/sections/Capabilities";
import SelectedBuilds from "@/components/sections/SelectedBuilds";
import Commission from "@/components/sections/Commission";
import Colophon from "@/components/Colophon";

export default function Home() {
  return (
    <LenisProvider>
      {/* Fixed architectural frame + ⌘K + mobile menu */}
      <ArchFrame />

      {/* Page canvas — inset to clear frame borders on all screen sizes */}
      <div className="mx-2 md:mx-4">
        <Manifesto />
        <StudioStandard />
        <Capabilities />
        <SelectedBuilds />
        <Commission />
        <Colophon />
      </div>
    </LenisProvider>
  );
}
