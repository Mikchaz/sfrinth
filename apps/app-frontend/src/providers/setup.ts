import type { AbstractModrinthClient } from '@modrinth/api-client'
import type { AbstractPopupNotificationManager, AbstractWebNotificationManager } from '@modrinth/ui'

import type { InstanceIconConfig } from '@/helpers/types'

import type { AppEvents } from './app-events.ts'
import { setupOnboardingChecklistProvider } from './onboarding-checklist.ts'
import { setupCreationModal } from './setup/creation-modal.ts'
import { setupFileDropProvider } from './setup/file-drop.ts'
import { setupFilePickerProvider } from './setup/file-picker.ts'
import { setupImageViewerEditorProvider } from './setup/image-viewer-editor.ts'
import { setupInstanceImportProvider } from './setup/instance-import.ts'
import { setupTagsProvider } from './setup/tags.ts'
import { setupUserCountryProvider } from './setup/user-country.ts'

export function setupProviders(
	client: AbstractModrinthClient,
	notificationManager: AbstractWebNotificationManager,
	_popupNotificationManager: AbstractPopupNotificationManager,
	appEvents: AppEvents,
	getGeneratedIconConfig?: (iconPath: string) => InstanceIconConfig | null,
) {
	setupUserCountryProvider(client)
	const tags = setupTagsProvider(notificationManager)
	setupFileDropProvider()
	setupFilePickerProvider()
	setupImageViewerEditorProvider()
	setupInstanceImportProvider(notificationManager)
	const onboardingChecklist = setupOnboardingChecklistProvider(appEvents)

	return {
		...setupCreationModal(notificationManager, getGeneratedIconConfig),
		onboardingChecklist,
		tags,
	}
}
