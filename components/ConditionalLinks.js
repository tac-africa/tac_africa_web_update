//used to wrap conditional elements around another component

export const ConditionalLinks = ({condition, wrapper, children}) => condition ? wrapper(children) : children