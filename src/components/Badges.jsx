import { BadgeCheck, BookmarkIcon, ExternalLink, ExternalLinkIcon, PencilIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Link } from "react-router"

export function ViewAllBadge() {
  return (
      <Badge>
        <Link to={'/current-student/courses'} className="flex items-center gap-2 font-light">
        <ExternalLink data-icon="inline-start" className="size-3"/>
        View All
        </Link>
      </Badge>
  )
}


export function EditBadge() {
  return(
    <Badge variant="secondary">
        <Link to={'/current-student/courses?edit=true'} className="flex items-center gap-2 font-light">
        <PencilIcon data-icon="inline-start" className="size-3"/>
        Edit
        </Link>
    </Badge>
  )
}