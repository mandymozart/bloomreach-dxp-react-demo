package at.foryouandyourcustomers.dxp.beans;
/*
 * Copyright 2014-2018 Hippo B.V. (http://www.onehippo.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import java.util.Calendar;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoDocument;
import org.hippoecm.hst.content.beans.standard.HippoGalleryImageSet;
import org.hippoecm.hst.content.beans.standard.HippoHtml;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;

@HippoEssentialsGenerated(internalName = "reactdemo:eventsdocument")
@Node(jcrType="reactdemo:eventsdocument")
public class EventsDocument extends HippoDocument {

    /**
     * The document type of the events document.
     */
    public static final String DOCUMENT_TYPE = "reactdemo:eventsdocument";

    private static final String TITLE = "reactdemo:title";
    private static final String DATE = "reactdemo:date";
    private static final String INTRODUCTION = "reactdemo:introduction";
    private static final String IMAGE = "reactdemo:image";
    private static final String CONTENT = "reactdemo:content";
    private static final String LOCATION = "reactdemo:location";
    private static final String END_DATE = "reactdemo:enddate";

    /**
     * Get the title of the document.
     *
     * @return the title
     */
    @HippoEssentialsGenerated(internalName = "reactdemo:title")
    public String getTitle() {
        return getProperty(TITLE);
    }

    /**
     * Get the date of the document, i.e. the start date of the event.
     *
     * @return the (start) date
     */
    @HippoEssentialsGenerated(internalName = "reactdemo:date")
    public Calendar getDate() {
        return getProperty(DATE);
    }

    /**
     * Get the introduction of the document.
     *
     * @return the introduction
     */
    @HippoEssentialsGenerated(internalName = "reactdemo:introduction")
    public String getIntroduction() {
        return getProperty(INTRODUCTION);
    }

    /**
     * Get the image of the document.
     *
     * @return the image
     */
    @HippoEssentialsGenerated(internalName = "reactdemo:image")
    public HippoGalleryImageSet getImage() {
        return getLinkedBean(IMAGE, HippoGalleryImageSet.class);
    }

    /**
     * Get the main content of the document.
     *
     * @return the content
     */
    @HippoEssentialsGenerated(internalName = "reactdemo:content")
    public HippoHtml getContent() {
        return getHippoHtml(CONTENT);
    }

    /**
     * Get the location of the document.
     *
     * @return the location
     */
    @HippoEssentialsGenerated(internalName = "reactdemo:location")
    public String getLocation() {
        return getProperty(LOCATION);
    }

    /**
     * Get the end date of the document, i.e. the end date of the event.
     *
     * @return the end date
     */
    @HippoEssentialsGenerated(internalName = "reactdemo:enddate")
    public Calendar getEndDate() {
        return getProperty(END_DATE);
    }

}
