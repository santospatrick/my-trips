import Link from 'next/link'
import * as Styled from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

function LinkWrapper({ href, children }: LinkWrapperProps) {
  return (
    <Styled.Wrapper>
      <Link href={href}>{children}</Link>
    </Styled.Wrapper>
  )
}

export default LinkWrapper
