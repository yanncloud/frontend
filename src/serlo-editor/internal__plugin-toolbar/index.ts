/**
 * Defines the Interface for the Serlo Editor plugin toolbar (INTERNAL)
 *
 * @remarks
 * This is an internal package. You should use the re-exports defined in
 * {@link @edtr-io/plugin-toolbar# | `@edtr-io/plugin-toolbar`} instead.
 * @packageDocumentation
 */

/**
 * The props for {@link PluginToolbar | PluginToolbarButton}
 *
 */
export interface PluginToolbarButtonProps {
  className?: string
  icon: React.ReactNode
  label: string
  ref: React.Ref<HTMLButtonElement>
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

/**
 * The props for {@link PluginToolbar | PluginToolbarOverlayButton}
 *
 */
export interface PluginToolbarOverlayButtonProps {
  className?: string
  renderContent?(
    children: React.ReactNode,
    additional: { close(): void }
  ): React.ReactNode
  contentRef: React.RefObject<HTMLDivElement>
  icon: React.ReactNode
  label: string
}

/**
 * The props for {@link PluginToolbar | OverlayButton}
 *
 */
export interface OverlayButtonProps {
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
  label: string
}

/**
 * The props for {@link PluginToolbar | OverlayCheckbox}
 *
 */
export interface OverlayCheckboxProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label: string
}

/**
 * The props for {@link PluginToolbar | OverlayInput}
 *
 */
export interface OverlayInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
}

/**
 * The props for {@link PluginToolbar | OverlaySelect}
 *
 */
export interface OverlaySelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string
  options: string[]
  width?: string
}

/**
 * The props for {@link PluginToolbar | OverlayTextarea}
 *
 */
export interface OverlayTextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string
}

/**
 * Describes the available components for the plugin toolbar
 *
 */
export interface PluginToolbar {
  OverlayButton: React.ComponentType<OverlayButtonProps>
  OverlayCheckbox: React.ComponentType<OverlayCheckboxProps>
  OverlayInput: React.ComponentType<OverlayInputProps>
  OverlaySelect: React.ComponentType<OverlaySelectProps>
  OverlayTextarea: React.ComponentType<OverlayTextareaProps>
  PluginToolbarButton: React.ComponentType<PluginToolbarButtonProps>
  PluginToolbarOverlayButton: React.ComponentType<PluginToolbarOverlayButtonProps>
}
