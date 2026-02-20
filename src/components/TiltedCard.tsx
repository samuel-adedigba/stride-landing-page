import React from "react";
import { motion } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc = "/Stride_logo.jpeg",
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  return (
    <figure
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden text-white/70 font-medium">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
        initial={{
          rotateX: rotateAmplitude,
          rotateY: -rotateAmplitude,
          scale: 1,
        }}
        whileInView={{ rotateX: 0, rotateY: 0, scale: 1 }}
        // viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: "spring",
          damping: springValues.damping,
          stiffness: springValues.stiffness,
          mass: springValues.mass,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>


      {showTooltip && captionText && (
        <figcaption className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-[#B6FF1A] px-[10px] py-[4px] text-[10px] text-[#0F1113] font-black uppercase tracking-wider opacity-100 z-[3] hidden sm:block">
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}
// export const TiltedCardDemo = () => {
//   return (
//       <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
//     <TiltedCard
//       imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
//       altText="Kendrick Lamar - GNX Album Cover"
//       captionText="Kendrick Lamar - GNX"
//       containerHeight="300px"
//       containerWidth="300px"
//       imageHeight="300px"
//       imageWidth="300px"
//       rotateAmplitude={12}
//       scaleOnHover={1.2}
//       showMobileWarning={false}
//       showTooltip={true}
//       displayOverlayContent={true}
//       overlayContent={
//         <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
//       }
//     />
//     </div>
//   );
// };
