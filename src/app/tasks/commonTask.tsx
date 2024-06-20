"use client";

import React, { useState } from "react";
import AppHeader from "./appHeader";
import SideNavbar from "./sideNav";
import Modal from "~/app/_components/Modal";

type CommonTask = {
  children: React.ReactNode;
};

export default function CommonTask({ children }: CommonTask) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <AppHeader onClick={() => setIsNavOpen(true)} />
      <main>
        <section>
          <Modal
            className={`fixed -top-1 transition-transform duration-300 ease-in-out ${!isNavOpen ? "-translate-x-full" : "translate-x-0"} `}
            isModelOpen={isNavOpen}
            setModalShow={setIsNavOpen}
          >
            <SideNavbar onClick={() => setIsNavOpen(false)} />
          </Modal>
        </section>
        {children}
      </main>
    </>
  );
}
