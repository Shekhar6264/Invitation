import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroDoor from "@/components/HeroDoor";
import FloatingPetals from "@/components/FloatingPetals";
import CoupleIntro from "@/components/CoupleIntro";
import WeddingDetails from "@/components/WeddingDetails";
import EventsSection from "@/components/EventsSection";
import DressCode from "@/components/DressCode";
import Gallery from "@/components/Gallery";
import CountdownTimer from "@/components/CountdownTimer";
import RSVPSection from "@/components/RSVPSection";
import InvitedBySection from "@/components/InvitedBySection";

const Index = () => {
  const [doorOpened, setDoorOpened] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {!doorOpened && <HeroDoor onOpen={() => setDoorOpened(true)} />}
      </AnimatePresence>

      {doorOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <FloatingPetals />
          <CoupleIntro />
          <WeddingDetails />
          <EventsSection />
          {/* <DressCode /> */}
          <Gallery />
          <CountdownTimer />
          <RSVPSection />
          <InvitedBySection />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
