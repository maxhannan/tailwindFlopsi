import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface DialogContextType {
  open: boolean;
  handleClickOpen: () => void;
  handleCloseDialog: () => void;
}

const AddRecipeContext = createContext<DialogContextType | null>(null);

interface PropsInterface {
  children: ReactNode;
}
export const AddRecipeContextProvider = ({ children }: PropsInterface) => {
  const [open, setOpen] = useState<DialogContextType["open"]>(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log("working");
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <AddRecipeContext.Provider
      value={{ open, handleClickOpen, handleCloseDialog }}
    >
      {children}
    </AddRecipeContext.Provider>
  );
};

export const useDialogContext = () => {
  const currentDialogContext = useContext(AddRecipeContext);

  if (!currentDialogContext) {
    throw new Error(
      "useDialogContext has to be used within <AddRecipeContext.Provider>"
    );
  }

  return currentDialogContext;
};

export default AddRecipeContext;
