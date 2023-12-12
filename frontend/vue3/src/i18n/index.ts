// i18n.ts
class I18n {
  private locale: string
  private messages: Record<string, Record<string, string>> = {}
  private loaders: Record<string, () => Promise<Record<string, string>>> = {}

  private static instance: I18n | null = null

  private constructor(options: {
    defaultLocale?: string
    loaders?: Record<string, () => Promise<Record<string, string>>>
  }) {
    this.locale = options.defaultLocale || 'en'
    this.loaders = options.loaders || {}
  }

  public static getInstance(options: {
    defaultLocale?: string
    loaders?: Record<string, () => Promise<Record<string, string>>>
  }): I18n {
    if (!this.instance) {
      this.instance = new I18n(options)
    }
    return this.instance
  }

  public async setLocale(locale: string): Promise<void> {
    if (!this.messages[locale]) {
      if (this.loaders[locale]) {
        const messages = await this.loaders[locale]()
        this.messages[locale] = messages
        this.locale = locale
      } else {
        console.warn(`Loader for locale '${locale}' not found.`)
      }
    } else {
      this.locale = locale
    }
  }

  public translate(key: string): string {
    const message =
      this.messages[this.locale] && this.messages[this.locale][key]
    if (message) {
      return message
    } else {
      console.warn(`Translation for key '${key}' not found.`)
      return key
    }
  }
}

export const getInstance = (options: {
  defaultLocale?: string
  loaders?: Record<string, () => Promise<Record<string, string>>>
}): I18n => I18n.getInstance(options)

export default I18n
