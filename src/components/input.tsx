import type { SubscriptionSchema } from '@/app/(home)/subscription-form'
import type { ComponentProps } from 'react'
import type {
  DeepRequired,
  FieldErrorsImpl,
  GlobalError,
} from 'react-hook-form'

type FormErrors = Partial<FieldErrorsImpl<DeepRequired<SubscriptionSchema>>> & {
  root?: Record<string, GlobalError> & GlobalError
}

type InputRootProps = ComponentProps<'div'> &
  (
    | {
        inputErrors: FormErrors
        errorName: keyof SubscriptionSchema
      }
    | {
        inputErrors?: undefined
        errorName?: never
      }
  )

export function InputRoot({
  inputErrors,
  errorName,
  ...props
}: InputRootProps) {
  const errorMessage =
    inputErrors?.[errorName]?.message || inputErrors?.root?.message
  return (
    <div className="flex flex-col gap-1">
      <div
        data-error={!!errorMessage}
        className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100
            data-[error=true]:border-danger"
        {...props}
      />

      {errorMessage && (
        <span className="text-danger text-sm">{errorMessage}</span>
      )}
    </div>
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[:not(:has(input:placeholder-shown))]:text-gray-100
            group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
  return <input className="flex-1 outline-0 placehoder-gray-400" {...props} />
}
