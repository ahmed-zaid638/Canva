import React from "react";

interface BuinessModelProps {
  open: number;
}
function BusinessModal({ open }: BuinessModelProps) {
  return (
    <div className="">
      {open ? (
        <div className={`border h-20 w-[300px] absolute bg-red-50  top-12 `}>
          BusinessModal
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BusinessModal;
