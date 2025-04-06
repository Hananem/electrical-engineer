"use client"

import { useToast } from "@/hooks/useToast"
import { Toast } from "@/components/ui/toast"

export function ToastContainer() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-0 right-0 z-[100] flex flex-col gap-2 p-4 max-w-[420px] w-full">
      {toasts.map((toast) => (
        <Toast key={toast.id} variant="default">
          <div>
            <div className="font-medium">{toast.title}</div>
            <div className="text-sm opacity-90">{toast.description}</div>
          </div>
        </Toast>
      ))}
    </div>
  )
}


