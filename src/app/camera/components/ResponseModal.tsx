import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export default function ResponseModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <Modal
        defaultOpen
        placement={"center"}
        onOpenChange={onOpenChange}
        size="full"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 pt-20">
                Bobby
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Input label="Message" placeholder="Send a message." />
                <Button color="danger" onPress={onClose}>
                  Send
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
