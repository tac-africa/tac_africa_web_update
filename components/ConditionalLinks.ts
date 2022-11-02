//used to wrap conditional elements around another component
type LinkTypes = {
    condition: any;
    wrapper: any;
    children: any;
}
export const ConditionalLinks = ({condition, wrapper, children}: LinkTypes) => condition ? wrapper(children) : children