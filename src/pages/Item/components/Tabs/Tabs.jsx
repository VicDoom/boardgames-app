import './Tabs.styles.scss'
import {useState} from "react";

export const Tabs = ({name, titles, contents}) => {
	const [selectedTab, setSelectedTab] = useState(0)
	return (
		<div className={`tabs tab-${name}`}>
			<div className="tabs__tab-titles">
				{titles.map((item, index) => (
					<div
						key={item}
						className={`tabs__tab-title tabs__tab-title-${index} ${selectedTab === index && 'tabs__tab-title--active'} text text--bold text--medium`}
						onClick={() => setSelectedTab(index)}
					>
						{item}
					</div>
				))}
			</div>
			<div className="tabs__tab-contents">
				{contents.map((item, index) => (
					<div
						key={item}
						className={`tabs__tab-content tabs__tab-content-${index} ${selectedTab === index && 'tabs__tab-content--active'} text`}
					>
						{titles[selectedTab]}:
						<div className={`tabs__tab-content-inner text text--medium`}>{item}</div>
					</div>
				))}
			</div>
		</div>
	)
}