import { FunctionComponent } from "react";
import BulletedLink from "../../BulletedLink";
import ButtonModal from "../../ButtonModal";

const SupersetTechDebt2022: FunctionComponent = () => (
  <ButtonModal
    buttonText="Tech debt"
    titleText="Apache Superset OSS - 2022"
    secondaryTitleText="Tech debt"
    experienceContent={
      <>
        <BulletedLink
          title="test: Fix async tests in SaveDatasetModal and complete overwrite
              screen test"
          link="https://github.com/apache/superset/pull/21020"
        />
        <BulletedLink
          title="fix: Change downloadAsImage to use Superset theme"
          link="https://github.com/apache/superset/pull/22011"
        />
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "1.5em",
            fontWeight: "bold",
          }}
        >
          Test suite warning cleanup
        </p>
        <p>
          This started as an internal hackathon and turned into an ongoing
          initiative to remove all async errors/warnings from the test suite.
        </p>
        <BulletedLink
          title="test: Fix act errors in FaveStar test"
          link="https://github.com/apache/superset/pull/21360"
        />
        <BulletedLink
          title="test: Fix act errors in PopoverDropdown test"
          link="https://github.com/apache/superset/pull/21361"
        />
        <BulletedLink
          title="test: Fix act errors in SaveDatasetActionButton test"
          link="https://github.com/apache/superset/pull/21362"
        />
        <BulletedLink
          title="test: Fix act errors in SqlEditorLeftBar test"
          link="https://github.com/apache/superset/pull/21363"
        />
        <BulletedLink
          title="test: Fix act errors in DatabaseModal test"
          link="https://github.com/apache/superset/pull/21365"
        />
        <BulletedLink
          title="test: Fix act errors in DatasetLayout test"
          link="https://github.com/apache/superset/pull/21367"
        />
        <BulletedLink
          title="test: Fix act errors in AddDataset test"
          link="https://github.com/apache/superset/pull/21381"
        />
        <BulletedLink
          title="test: Fix act errors in LeftPanel test"
          link="https://github.com/apache/superset/pull/21383"
        />
        <BulletedLink
          title="test: Fix act errors in SubMenu test"
          link="https://github.com/apache/superset/pull/21387"
        />
        <BulletedLink
          title="test: Fix act errors in Menu test"
          link="https://github.com/apache/superset/pull/21391"
        />
        <BulletedLink
          title="test: Fix act errors in LanguagePicker test"
          link="https://github.com/apache/superset/pull/21395"
        />
        <BulletedLink
          title="test: Fix act errors in SelectFilterPlugin test"
          link="https://github.com/apache/superset/pull/21396"
        />
        <BulletedLink
          title="test: Fix act errors in ExploreChartPanel test"
          link="https://github.com/apache/superset/pull/21397"
        />
        <BulletedLink
          title="test: Fix act errors in ControlPanelsContainer test"
          link="https://github.com/apache/superset/pull/21398"
        />
        <BulletedLink
          title="test: Fix act error in PropertyModal test"
          link="https://github.com/apache/superset/pull/21400"
        />
        <BulletedLink
          title="test: Fix act error in ExportToCVSDropdown test"
          link="https://github.com/apache/superset/pull/21401"
        />
        <BulletedLink
          title="test: Fix act errors in ExploreChartHeader test"
          link="https://github.com/apache/superset/pull/21402"
        />
        <BulletedLink
          title="test: Fix act error in DataTablesPane test"
          link="https://github.com/apache/superset/pull/21403"
        />
        <BulletedLink
          title="test: Fix act errors in ResultsPaneOnDashboard test"
          link="https://github.com/apache/superset/pull/21404"
        />
        <BulletedLink
          title="test: Fix act errors in SamplesPane test"
          link="https://github.com/apache/superset/pull/21406"
        />
        <BulletedLink
          title="test: Fix act error in FilterInput test"
          link="https://github.com/apache/superset/pull/21407"
        />
        <BulletedLink
          title="test: Fix act errors in DatasourcePanel test"
          link="https://github.com/apache/superset/pull/21409"
        />
        <BulletedLink
          title="test: Fix act errors in DatasourcePanelDragOption test"
          link="https://github.com/apache/superset/pull/21410"
        />
        <BulletedLink
          title="test: Fix act errors in CollectionControl test"
          link="https://github.com/apache/superset/pull/21421"
        />
        <BulletedLink
          title="test: Fix act errors in AnnotationLayer test"
          link="https://github.com/apache/superset/pull/21423"
        />
        <BulletedLink
          title="test: Fix act errors in DatasourceControl test"
          link="https://github.com/apache/superset/pull/21426"
        />
        <BulletedLink
          title="test: Fix act errors in CustomFrame test"
          link="https://github.com/apache/superset/pull/21427"
        />
        <BulletedLink
          title="test: Fix act errors in DndColumnSelect test"
          link="https://github.com/apache/superset/pull/21428"
        />
        <BulletedLink
          title="test: Fix act errors in DndFilterSelect test"
          link="https://github.com/apache/superset/pull/21429"
        />
        <BulletedLink
          title="test: Fix act errors in ExploreChartPanel test"
          link="https://github.com/apache/superset/pull/21456"
        />
        <BulletedLink
          title="test: Fix act errors in DndMetricSelect test"
          link="https://github.com/apache/superset/pull/22048"
        />
        <BulletedLink
          title="test: Fix act errors in FixedOrMetricControl test"
          link="https://github.com/apache/superset/pull/22334"
        />
        <BulletedLink
          title="test: Fix act errors in VizTypeControl test"
          link="https://github.com/apache/superset/pull/22424"
        />
      </>
    }
  />
);

export default SupersetTechDebt2022;
