// src/components/AppHeader.tsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Menu, X, User } from 'lucide-react'
import clsx from 'clsx'
import BadgeIcon from '@/components/BadgeIcon'
import { BadgeKey } from '@/types/job'

// モックデータ - 実際のアプリでは適切なstateやAPIから取得
const MOCK_WORKER_BADGES: { badge: BadgeKey; count: number }[] = [
 { badge: 'waiter', count: 12 },
 { badge: 'cook', count: 7 },
 { badge: 'dishwasher', count: 2 }
]

const MOCK_EMPLOYER_BADGES: { badge: BadgeKey; count: number }[] = [
 { badge: 'barista', count: 8 },
 { badge: 'cashier', count: 5 },
 { badge: 'kitchen', count: 3 }
]

interface AppHeaderProps {
 role: 'worker' | 'employer'
 onRoleChange: (r: 'worker' | 'employer') => void
}

export default function AppHeader({ role, onRoleChange }: AppHeaderProps) {
 const [open, setOpen] = useState(false)
 const [showBadges, setShowBadges] = useState(false)
 const navigate = useNavigate()
 
 const switchRole = () => {
   const next = role === 'worker' ? 'employer' : 'worker'
   onRoleChange(next)
   navigate(next === 'worker' ? '/' : '/employer')
 }
 
 const pill = role === 'worker'
   ? 'bg-blue-600 hover:bg-blue-700'
   : 'bg-orange-500 hover:bg-orange-600'

 // 現在のroleに応じたバッジを取得
 const currentBadges = role === 'worker' ? MOCK_WORKER_BADGES : MOCK_EMPLOYER_BADGES

 return (
   <>
     <header className="flex items-center justify-between px-4 py-3 shadow-md bg-white">
       <div className="flex items-center space-x-4">
         <button
           aria-label="Open menu"
           onClick={() => setOpen(true)}
           className="p-2 rounded hover:bg-primary/10"
         >
           <Menu className="w-6 h-6" />
         </button>
         
         <Link 
           to="/" 
           className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
         >
           DashShift
         </Link>
       </div>
       
       <div className="flex items-center space-x-3">
         {/* プロフィールアイコン（ホバーでバッジ情報表示） */}
         <div 
           className="relative"
           onMouseEnter={() => setShowBadges(true)}
           onMouseLeave={() => setShowBadges(false)}
         >
           <Link 
             to="/profile"
             className="p-2 hover:bg-gray-100 transition-colors rounded"
           >
             <User className="w-6 h-6 text-gray-600" />
           </Link>
           
           {/* ホバー時のバッジ情報ツールチップ */}
           {showBadges && (
             <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-48 z-50">
               <div className="text-sm font-medium text-gray-900 mb-2">My Badges</div>
               <div className="space-y-2">
                 {currentBadges.map((item, index) => (
                   <div key={`tooltip-${item.badge}-${index}`} className="flex items-center space-x-3">
                     <BadgeIcon
                       badge={item.badge}
                       count={item.count}
                       size={24}
                       variant="gradient"
                     />
                     <div className="flex-1">
                       <div className="text-sm font-medium capitalize">{item.badge}</div>
                       <div className="text-xs text-gray-500">{item.count} completed</div>
                     </div>
                   </div>
                 ))}
               </div>
               <div className="border-t border-gray-100 mt-3 pt-2">
                 <Link 
                   to="/profile" 
                   className="text-xs text-primary hover:text-primary/80 font-medium"
                 >
                   View Profile →
                 </Link>
               </div>
             </div>
           )}
         </div>
         
         {/* ロール切り替えボタン */}
         <button
           onClick={switchRole}
           className={clsx(
             'px-3 py-1 rounded-full font-semibold text-white shadow transition-colors',
             pill
           )}
         >
           {role === 'worker' ? 'Job Seeker' : 'Employer'}
         </button>
       </div>
     </header>
     
     {/* Drawer */}
     <nav
       className={clsx(
         'fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out',
         open ? 'translate-x-0' : '-translate-x-full'
       )}
     >
       <div className="flex items-center justify-between p-4 border-b">
         <h2 className="text-lg font-semibold">Menu</h2>
         <button
           aria-label="Close menu"
           onClick={() => setOpen(false)}
           className="p-1 rounded hover:bg-primary/10"
         >
           <X className="w-5 h-5" />
         </button>
       </div>
       <div className="p-4 border-b">
         <button
           onClick={switchRole}
           className={clsx(
             'w-full rounded px-3 py-2 text-center font-semibold text-white shadow',
             pill
           )}
         >
           Switch to {role === 'worker' ? 'Employer' : 'Job Seeker'} Mode
         </button>
       </div>
       <ul className="flex flex-col p-4 space-y-2 text-lg">
         {role === 'worker' ? (
           <>
             <li><Link to="/" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-primary/10">Home</Link></li>
             <li><Link to="/map" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-primary/10">Map</Link></li>
           </>
         ) : (
           <>
             <li><Link to="/employer" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-primary/10">Dashboard</Link></li>
             <li><Link to="/post" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-primary/10">Post Job</Link></li>
           </>
         )}
         <li><Link to="/profile" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-primary/10">Profile</Link></li>
       </ul>
     </nav>
     {open && (
       <div
         aria-hidden="true"
         className="fixed inset-0 bg-black/30 z-40"
         onClick={() => setOpen(false)}
       />
     )}
   </>
 )
}