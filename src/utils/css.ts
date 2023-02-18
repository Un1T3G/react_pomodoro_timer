export const cn = (
  defaultClassName: string,
  ...args: (string | undefined)[]
) => {
  return [defaultClassName, ...args.filter((e) => !!e)].join(' ')
}
