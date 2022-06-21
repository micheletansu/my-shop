const getContext = (p1, p2) => ([
  {
    text: p1,
    disabled: false,
    href: 'breadcrumbs_dashboard',
  },
  {
    text: p2,
    disabled: false,
    href: 'breadcrumbs_dashboard',
  },
]);

export default getContext;
export { getContext };
