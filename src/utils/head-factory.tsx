interface HeadOptions {
  title?: string;
}

export default function headFactory(opts: HeadOptions = {}) {
  const { title } = opts;
  return () => {
    return (<>
      <html lang="en" />
      <title>{ title ? `${title} - Theta Tau UTK` : 'Theta Tau UTK' }</title>
    </>)
  }
}