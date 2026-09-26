import type { Ref } from 'vue'

import type { NodeState, StageNode } from '../types/node'
import useCategoriesStage from './stages/categories.tsx'
import useDescriptionStage from './stages/description.tsx'
import useDisclosuresStage from './stages/disclosures.tsx'
import useGalleryStage from './stages/gallery.tsx'
import useLicenseStage from './stages/license.tsx'
import useLinksStage from './stages/links.tsx'
import useMetadataStage from './stages/metadata.tsx'
import usePermissionsStage from './stages/permissions.tsx'
import usePostApprovalStage from './stages/post-approval.tsx'
import useReReviewStage from './stages/re-review.tsx'
import useReuploadsStage from './stages/reupload.tsx'
import useRulesStage from './stages/rules.tsx'
import useStatusAlertsStage from './stages/status-alerts.tsx'
import useSummaryStage from './stages/summary.tsx'
import useTitleSlugStage from './stages/title-slug.tsx'
import useUndefinedProjectStage from './stages/undefined-project.tsx'
import useVersionsStage from './stages/versions.tsx'

export function useStages(
	globalState: Ref<Record<string, Record<string, NodeState>>>,
): StageNode[] {
	const mainStages: StageNode[] = [
		usePostApprovalStage(),
		useUndefinedProjectStage(),
		useReReviewStage(),
		useTitleSlugStage(),
		useSummaryStage(),
		useDescriptionStage(),
		useGalleryStage(),
		useDisclosuresStage(),
		useLinksStage(),
		useLicenseStage(),
		useCategoriesStage(),
		useMetadataStage(),
		useVersionsStage(),
		useReuploadsStage(),
		usePermissionsStage(),
		useRulesStage(),
	]
	return [...mainStages, useStatusAlertsStage(mainStages, globalState)]
}
