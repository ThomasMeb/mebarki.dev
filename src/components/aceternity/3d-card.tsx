"use client";
import { createContext, useContext, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const MouseEnterContext = createContext<{
  rotateX: number;
  rotateY: number;
}>({ rotateX: 0, rotateY: 0 });

export function CardContainer({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const x = (e.clientX - rect.left - width / 2) / 20;
      const y = (e.clientY - rect.top - height / 2) / 20;
      setRotate({ x: y, y: -x });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
  }, []);

  return (
    <MouseEnterContext.Provider value={{ rotateX: rotate.x, rotateY: rotate.y }}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative flex items-center justify-center transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transform: `rotateY(${rotate.y}deg) rotateX(${rotate.x}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-auto w-auto [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardItem({
  as: Tag = "div",
  children,
  className,
  translateZ = 0,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateZ?: number;
}) {
  const { rotateX, rotateY } = useContext(MouseEnterContext);
  const isActive = rotateX !== 0 || rotateY !== 0;

  return (
    <Tag
      className={cn("w-fit transition duration-200 ease-linear", className)}
      style={{
        transform: isActive ? `translateZ(${translateZ}px)` : "translateZ(0px)",
      }}
    >
      {children}
    </Tag>
  );
}
