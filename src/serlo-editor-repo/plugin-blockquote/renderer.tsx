import { BlockquoteProps } from '.'

export function BlockquoteRenderer(props: BlockquoteProps) {
  return <blockquote>{props.state.render()}</blockquote>
}
