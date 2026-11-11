import DiplomasGrid from "@/features/dashboard/diplomas/components/DiplomasGrid";
import Heading from "@/features/dashboard/layout/components/Heading";
import { GraduationCap } from "lucide-react";

const Diplomas = () => {
  return (
    <div>
      <Heading>
        <GraduationCap size={30} />
      </Heading>
      <DiplomasGrid />
    </div>
  );
};

export default Diplomas;
