import { useState } from 'react'

const tabs = ['Hesabım', 'Şirket', 'Ekip Üyeleri', 'Faturalama']
// Tabs bileşenini yeniden düzenleyin ve aşağıdaki görevleri tamamlayın:
// 1. State setter fonksiyonunu doğru şekilde kullanarak geçerli sekmeyi (currentTab) güncelleyin.
// 2. Tailwind kullanarak aşağıdaki değişiklikleri yapın:
//    - Aktif sekmenin arka plan rengini daha belirgin hale getirin. (örneğin: "bg-indigo-200")
//    - Sekmeler arasındaki boşluğu artırmak için "space-x-6" kullanın.
//    - Aktif olmayan sekmelere hover sırasında hafif büyüme efekti ekleyin. (örneğin: "hover:scale-105")
// 3. Kullanıcı farklı sekmeye tıkladığında, geçerli sekmenin adını ekranda dinamik olarak görüntüleyin. (örneğin: "Şu anda 'Ekip Üyeleri' sekmesindesiniz.")
// 4. Sekmelerin içeriğini (örneğin: "Hesabım" sekmesi için form, "Faturalama" sekmesi için tablo) dinamik olarak değiştirmek için içerik alanı ekleyin.

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState('Hesabım')
  // let currentTab = "Hesabım;

  //   return (
  //     <div className='flex justify-center my-8'>
  //       <div className='flex space-x-4' aria-label='Tabs'>
  //         {tabs.map((tab) => (
  //           <button
  //             key={tab}
  //             onClick={() => {
  //               currentTab = tab
  //             }}
  //             className={`${
  //               tab === currentTab
  //                 ? 'bg-indigo-100 text-indigo-700'
  //                 : 'text-gray-500 hover:text-gray-700'
  //             } rounded-md px-3 py-2 text-sm font-medium`}
  //           >
  //             {tab}
  //           </button>
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }

  const renderContent = () => {
    switch (currentTab) {
      case 'Hesabım':
        return <p>Burada hesap ayarları formu olacak.</p>
      case 'Şirket':
        return <p>Şirket bilgileri burada görünecek.</p>
      case 'Ekip Üyeleri':
        return <p>Ekip üyelerinin listesi burada olacak.</p>
      case 'Faturalama':
        return <p>Fatura geçmişi burada bir tablo şeklinde listelenecek.</p>
      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="flex justify-center space-x-6 mb-6" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-transform ${
              tab === currentTab
                ? 'bg-indigo-200 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700 hover:scale-105'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <p className="text-center mb-4 text-gray-700 font-semibold">
        Şu anda <span className="text-indigo-600">"{currentTab}"</span>{' '}
        sekmesindesiniz.
      </p>

      <div className="bg-white p-6 rounded shadow-md text-center">
        {renderContent()}
      </div>
    </div>
  )
}
