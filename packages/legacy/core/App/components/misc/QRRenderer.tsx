import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, ViewStyle, Text, useWindowDimensions } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

import { useTheme } from '../../contexts/theme'
import { testIdWithKey } from '../../utils/testable'

interface QRRendererProps {
  value?: string
  size?: number
  style?: ViewStyle
  onError?: () => void
}

const QRRenderer: React.FC<QRRendererProps> = ({ value, onError, size }) => {
  const { width } = useWindowDimensions()
  const { t } = useTranslation()
  const { ColorPallet } = useTheme()

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      marginVertical: 20,
      backgroundColor: 'white',
    },
    errorMessage: {
      color: ColorPallet.semantic.error,
      textAlign: 'center',
    },
  })

  const [isInvalidQR, setIsInvalidQR] = useState(false)

  const handleQRCodeGenerationError = useCallback(() => {
    setIsInvalidQR(true)
    if (onError) {
      onError()
    }
  }, [onError])

  const qrSize = (size ?? width - 80) > 500 ? 500 : size ?? width - 80

  return (
    <View style={styles.container} testID={testIdWithKey('QRRenderer')}>
      <QRCode
        ecl="L"
        value={value}
        size={qrSize}
        onError={handleQRCodeGenerationError}
        // backgroundColor="black"
        // color="white"
        // logo={logo}
        // logoSize={150}
      />
      {isInvalidQR && <Text style={styles.errorMessage}>{t('QRRender.GenerationError')}</Text>}
    </View>
  )
}

export default QRRenderer
