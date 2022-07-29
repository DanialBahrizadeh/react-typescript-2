import React, { FunctionComponent } from "react";

interface TextOwnProps<E extends React.ElementType> {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

/**
 * the Omit<T,K> will get only the  K from T tha twhat i get you must be srech more for that
 */

const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
  ...props
}: TextProps<E>) => {
  const Component = as || "div";

  return (
    <Component className={`class-with-${size}-${color}`} {...props}>
      {children}
    </Component>
  );
};

export default Text;
