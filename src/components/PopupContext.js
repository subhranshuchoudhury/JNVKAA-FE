// PopupContext.js
import React, { createContext, useState } from "react";

const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  return (
    <PopupContext.Provider value={{ showFirstModal, setShowFirstModal, showSecondModal, setShowSecondModal }}>
      {children}
    </PopupContext.Provider>
  );
};

export { PopupContext, PopupProvider };
