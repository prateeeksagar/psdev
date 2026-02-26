"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import { GitHubCalendar } from 'react-github-calendar'

const GithubContribution = () => {
    const { theme } = useTheme()
  const currentTheme = theme == "dark" || theme == "light" ? theme : "light"
  return (
    <div className="">
        <h2 className='text-2xl font-semibold p-2 border-b'>Github Contributions</h2>
        <div className='flex items-center justify-center'>
        <GitHubCalendar className="p-4 w-fit" blockSize={9} blockRadius={0} username="prateeeksagar" colorScheme={currentTheme} showTotalCount={true} />
        </div>

    </div>
  )
}

export default GithubContribution
