"use client";

import { useState } from "react";
import { Group, Button, Container, Text } from "@mantine/core";
import Image from "next/image";
import CreateJobModal from "./CreateJobModal";

export default function Navbar({ onJobCreated }: { onJobCreated: () => void }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* Navbar Wrapper */}
      <div
        style={{
          padding: "12px 20px",
          background: "white",
          borderRadius: "50px", // pill shape
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
          margin: "16px auto",
          maxWidth: "900px", // ⬅️ reduced width (was 1150px)
        }}
      >
        <Container
          size="lg"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo (Image) */}
          {/* Logo (Image) */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginLeft: "40px", // ⬅️ shifted right
  }}
>
  <Image src="/logo.png" alt="JobPortal Logo" width={40} height={40} />
</div>


          {/* Links */}
          <Group gap="lg">
            <Text style={{ cursor: "pointer" }}>Home</Text>
            <Text style={{ cursor: "pointer" }}>Find Jobs</Text>
            <Text style={{ cursor: "pointer" }}>Find Talents</Text>
            <Text style={{ cursor: "pointer" }}>About us</Text>
            <Text style={{ cursor: "pointer" }}>Testimonials</Text>
          </Group>

          {/* Gradient Button */}
          <Button
            radius="xl"
            size="md"
            style={{
              background: "linear-gradient(90deg, #6A11CB, #2575FC)",
              color: "white",
              fontWeight: 600,
              padding: "10px 20px",
              marginRight: "60px",
            }}
            onClick={() => setOpened(true)}
          >
            Create Jobs
          </Button>
        </Container>
      </div>

      {/* Modal */}
      <CreateJobModal
        opened={opened}
        onClose={() => setOpened(false)}
        onJobCreated={onJobCreated}
      />
    </>
  );
}
