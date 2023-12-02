import {  BanknotesIcon, CurrencyRupeeIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: '100 %', stat: 'Placement Guarantee*', icon: AcademicCapIcon, change: '122', changeType: 'increase' },
  { id: 2, name: '₹ 18 LPA', stat: 'Highest salary offered', icon: BanknotesIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: '₹ 6 LPA', stat: 'Average Salary', icon: CurrencyRupeeIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 p-8">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5  shadow sm:px-6 sm:pt-6 "
          >
            <dt>
            <div class="hidden xl:block absolute rounded-md bg-indigo-500 p-3">
  <item.icon class="h-4 w-4 xl:h-6 xl:w-6 text-white" aria-hidden="true" />
</div>

              <p className="text-center truncate text-2xl font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="text-center items-baseline pb-6 sm:pb-7">
              <p className="text-center text-2xl font-semibold text-gray-900">{item.stat}</p>
              {/* <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p> */}
              {/* <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    {' '}
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div> */}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
