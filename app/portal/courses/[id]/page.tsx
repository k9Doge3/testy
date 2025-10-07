
import { redirect } from 'next/navigation'
import { getEmployeeSession, roleSatisfies } from '@/lib/employee-auth'
import { cookies } from 'next/headers'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import React from 'react'

async function fetchJSON(path: string, init?: RequestInit) {
  const res = await fetch(path, { ...init, cache: 'no-store' })
  if (!res.ok) throw new Error('Request failed ' + res.status)
  return res.json()
}

interface CourseModule { id: string; title: string; order: number; contentType: string; contentRef: string; estMinutes?: number }
interface Course { id: string; title: string; description?: string; version: number; mandatory: boolean; modules: CourseModule[] }

export const dynamic = 'force-dynamic'


    }
  })}>Complete Course</Button>
}
