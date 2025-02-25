'use client'
import IconButton from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'
import { useState } from 'react'

interface InviteLinkInputProps {
  linkValue: string
}

export function InviteLinkInput({ linkValue }: InviteLinkInputProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(linkValue)
      setIsCopied(true)

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={linkValue} />
      <IconButton
        onClick={handleCopy}
        className="-mr-2"
        title={isCopied ? 'Copied!' : 'Copy to clipboard'}
      >
        {isCopied ? (
          <div className="flex gap-2">
            <span className="text-sm">copied!</span>
          </div>
        ) : (
          <Copy className="size-5" />
        )}
      </IconButton>
    </InputRoot>
  )
}
